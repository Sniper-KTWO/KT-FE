import { Slider } from '@nextui-org/react';
import { useHover } from 'react-aria';
import { useState } from 'react';

export default function PriceSlider() {
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <Slider
      label="요금제 범위"
      step={10000}
      maxValue={70000}
      minValue={0}
      defaultValue={[0, 70000]}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{ style: 'currency', currency: 'KRW' }}
      tooltipValueFormatOptions={{
        style: 'currency',
        currency: 'KRW',
        maximumFractionDigits: 0,
      }}
      classNames={{
        base: 'max-w-[320px]',
        filler: 'bg-[#E0F6F4]',
        labelWrapper: 'mb-3',
        label: 'font-medium text-default-700 text-medium',
        value: 'font-medium text-default-500 text-small',
        thumb: [
          'transition-size',
          'bg-[#0FE3B1]',
          'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
          'w-4 h-4',
        ],
        step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
      }}
      tooltipProps={{
        offset: 10,
        placement: 'bottom',
        classNames: {
          base: [
            // arrow color
            'before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500',
          ],
          content: [
            'py-2 shadow-xl',
            'text-white bg-gradient-to-r from-secondary-400 to-primary-500',
          ],
        },
      }}
      showValue={true}
    />
  );
}
