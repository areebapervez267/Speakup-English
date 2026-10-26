import {
  BookMarked,
  BookOpen,
  Headphones,
  MessageCircle,
  Mic,
  PenLine,
  SpellCheck,
  type LucideIcon,
} from "lucide-react";

import type { SkillId } from "@/data/curriculum";
import { cn } from "@/lib/utils";

const skillIcons: Record<SkillId, LucideIcon> = {
  grammar: SpellCheck,
  listening: Headphones,
  speaking: MessageCircle,
  pronunciation: Mic,
  vocabulary: BookMarked,
  reading: BookOpen,
  writing: PenLine,
};

export function SkillIcon({
  skill,
  className,
}: {
  skill: SkillId;
  className?: string;
}) {
  const Icon = skillIcons[skill];

  return <Icon aria-hidden="true" className={cn("size-5", className)} />;
}
