import { createFileRoute } from '@tanstack/react-router';
import { Chambers } from '@/components/Chambers';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-20">
      <Chambers />
    </main>
  );
}
