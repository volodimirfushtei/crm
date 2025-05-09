import clsx from 'clsx';

interface Props {
    category: string;
}

export default function BorderChange({category}: Props) {
    const borderColor = getBorderColorByCategory(category);

    return (
        <div
            className={clsx(
                'p-4 rounded shadow',
                borderColor,
            )}
        >
            <p>{category}</p>
        </div>
    );
}

function getBorderColorByCategory(category: string) {
    switch (category.toLowerCase()) {
        case 'category 1':
            return 'border-2 border-blue-500';
        case 'category 2':
            return 'border-2 border-pink-500';
        case 'category 3':
            return 'border-2 border-green-500';
        case 'category 4':
            return 'border-2 border-green-500';
        case 'category 5':
            return 'border-2 border-green-500';
        case 'category 6':
            return 'border-2 border-green-500';
        case 'category 7':
            return 'border-2 border-green-500';
        case 'category 8':
            return 'border-2 border-green-500';
        default:
            return 'border-2 border-gray-300';
    }
}
