import { cn } from "@/lib/utils";
import React from "react";

const CalendarDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

type DayGridProps = {
  className?: string;
  day: number;
  users: any;
};

function DayGrid({ className, day, users }: DayGridProps) {
  return (
    <div
      className={cn("border-l border-y  border-zinc-300 p-2 h-full", className)}
    >
      <h2 className="mb-4">{CalendarDays[day]}</h2>
      <div className="flex gap-2 flex-col">
        <div className="bg-red-400 text-sm font-medium p-2 w-full h-12 rounded-sm text-white">
          Turno Mañana
        </div>

        <div className="bg-blue-400 p-2 w-full text-sm font-medium h-12 rounded-sm text-white">
          Turno Tarde
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="w-full flex flex-col h-full">
      <h1>Turnos y Horarios</h1>
      <div className="grid  w-full grid-cols-7 flex-1">
        <DayGrid className="rounded-l-md" day={0} />
        <DayGrid day={1} />
        <DayGrid day={2} />
        <DayGrid day={3} />
        <DayGrid day={4} />
        <DayGrid day={5} />
        <DayGrid className="border-r rounded-l-md" day={6} />
      </div>
    </div>
  );
}

export default Page;
