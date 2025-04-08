import StatusLabel, {Status} from '@/app/components/status-label';

import MagicPattern from '@/app/components/magicpattern';


export default function Home() {
  return (
      <main>
        <h1 className="text-xl">Dashboard</h1>
          <StatusLabel status={Status.Active}>Active</StatusLabel>
          <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
          <StatusLabel status={Status.Pending}>Pending</StatusLabel>
          <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
          <MagicPattern>
          </MagicPattern>

      </main>
  );
}
