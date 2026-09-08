import { createFileRoute } from '@tanstack/react-router';
import { CounselRoster } from '@/components/CounselRoster';

export const Route = createFileRoute('/counsel')({
  component: CounselPage,
});

function CounselPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-20">
      <CounselRoster />
    </main>
  );
}
