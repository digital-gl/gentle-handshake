import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ToggleSectionProps {
  label: string;
  tooltip?: string;
  enabled: boolean;
  onToggle: (v: boolean) => void;
  children: React.ReactNode;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({ label, tooltip, enabled, onToggle, children }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Switch checked={enabled} onCheckedChange={onToggle} />
        {tooltip ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-sm font-medium text-bm-gray cursor-help">{label}</span>
            </TooltipTrigger>
            <TooltipContent><p className="text-xs max-w-[200px]">{tooltip}</p></TooltipContent>
          </Tooltip>
        ) : (
          <span className="text-sm font-medium text-bm-gray">{label}</span>
        )}
      </div>
      <div className={enabled ? '' : 'toggle-disabled'}>{children}</div>
    </div>
  );
};

export default ToggleSection;
