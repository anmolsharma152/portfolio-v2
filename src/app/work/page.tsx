import { Metadata } from 'next';

import WorkView from './WorkView';

export const metadata: Metadata = {
  title: 'Work & Systems // Anmol Sharma',
  description:
    'Engineering output, production AI architectures, research models, and career timeline.',
};

export default function WorkPage() {
  return <WorkView />;
}
