import { createFileRoute } from '@tanstack/react-router';
import { PracticeGrid } from '@/components/PracticeGrid';

export const Route = createFileRoute('/practice')({
  component: PracticePage,
});

function PracticePage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-20">
      <PracticeGrid />
    </main>
  );
}
