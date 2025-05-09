export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}


export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}


export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',

}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

//--------------------------------------------------------------------------------------------------------

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;
const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();
const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;

};

const PROJECT_TOKEN_1 = process.env.NEXT_PUBLIC_PROJECT_TOKEN_V;

const buildUrl1 = (...paths: string[]) =>
  `https://${PROJECT_TOKEN_1}.mockapi.io/api/v1/${paths.join('/')}`;


const sendRequest1 = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};


//---------------------------------------------------------------------------------------------------------


export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest1<SummaryStats>(buildUrl1('summary-stats', '1'), init);
};

export const getSummarySales = (init?: RequestInit) => {
  return sendRequest1<SummarySales[]>(buildUrl1('summary-sales'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest1<Country[]>(buildUrl1('countries'), init);
};


export const getCategories = (init?: RequestInit) => {
  return sendRequest1<Category[]>(buildUrl1('categories'), init);
};


export const getCompanies = (init?: RequestInit) => {
  return sendRequest<Company[]>(buildUrl('companies'), init);

};

export const getCompany = (id: string, init?: RequestInit) => {


  return sendRequest<Company>(buildUrl('companies', id), init);

};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  const query = stringifyQueryParams(params);
  const url = query ? `${buildUrl('promotions')}?${query}` : buildUrl('promotions');

  return sendRequest<Promotion[]>(url, init);
};

export const createCompany = (data: any) => {
  return sendRequest(buildUrl('companies'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deleteCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildUrl('companies', id), {
    method: 'DELETE',
    ...init,
  });
};

export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit,
) => {
  console.log('Sending data to createPromotion:', data);
  return sendRequest<Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};


export const deletePromotion = async (promotionId: string): Promise<void> => {
  const url = buildUrl('promotions', promotionId);

  console.log('Deleting promotion at:', url); // 🔍 Додайте цей рядок для дебагу

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Не вдалося видалити акцію. Статус: ${response.status}`);
  }
};


