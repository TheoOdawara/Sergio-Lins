"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Heart,
  Award,
  Users,
  Stethoscope,
  CalendarDays,
  Activity,
  AlertCircle,
  Target,
  Circle,
  Square,
  Hexagon,
  Zap,
  GitBranch,
  AlertTriangle,
  User,
  HelpCircle,
  type LucideIcon 
} from "lucide-react";

// Mapeamento de ícones
const iconMap: Record<string, LucideIcon> = {
  CheckCircle,
  Clock,
  Shield,
  Heart,
  Award,
  Users,
  Stethoscope,
  CalendarDays,
  Activity,
  AlertCircle,
  Target,
  Circle,
  Square,
  Hexagon,
  Zap,
  GitBranch,
  AlertTriangle,
  User,
  HelpCircle,
};

interface CardItem {
  title: string;
  description: string;
  icon?: string;
}

interface CardGridSectionProps {
  title: string;
  titleHighlight: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  bgDark?: boolean;
}

export default function CardGridSection({
  title,
  titleHighlight,
  items,
  columns = 3,
  bgDark = false,
}: CardGridSectionProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`relative py-24 ${bgDark ? 'bg-bg-dark' : ''}`}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            <span className="text-gold">{titleHighlight}</span> {title}
          </h2>
        </motion.div>

        <div className={`grid gap-8 ${gridCols[columns]}`}>
          {items.map((item, index) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative space-y-4 border-2 border-gold/20 p-6 transition-all hover:border-gold/50 hover:shadow-gold-glow ${
                  bgDark ? 'bg-bg-black' : 'bg-bg-dark'
                } ${columns === 4 ? 'text-center' : ''}`}
              >
                {Icon && (
                  <div className={`flex h-${columns === 4 ? '16' : '8'} w-${columns === 4 ? '16' : '8'} items-center justify-center border-2 border-gold ${
                    columns === 4 ? 'mx-auto' : ''
                  } ${bgDark ? 'bg-bg-black' : 'bg-bg-dark'}`}>
                    <Icon className={`h-8 w-8 text-gold`} aria-hidden="true" />
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-white/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
