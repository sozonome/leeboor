import { Button } from '@/components/ui/button';

const NavigateButton = () => {
  return (
    <Button asChild size="sm">
      <a href={`/year/${new Date().getFullYear()}`}>Selengkapnya</a>
    </Button>
  );
};

export default NavigateButton;
