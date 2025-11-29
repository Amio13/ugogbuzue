import { useMemo, useState } from "react";

export const MARKET_DAYS = ["eke", "orie", "afor", "nkwo"] as const;
type MarketDay = (typeof MARKET_DAYS)[number];

// Anchor date: 2025-11-28 is ORIE (index 1)
const ANCHOR_DATE = new Date("2025-11-28T00:00:00Z");
const ANCHOR_INDEX = 3; // nkwo

function daysBetween(a: Date, b: Date) {
  // count full calendar days
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utcA - utcB) / (24 * 60 * 60 * 1000));
}

function marketDayFor(date: Date): MarketDay {
  const diff = daysBetween(date, ANCHOR_DATE);
  // diff = days from anchor to date (can be negative)
  const idx = (((ANCHOR_INDEX + diff) % 4) + 4) % 4;
  return MARKET_DAYS[idx];
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

export default function IgboCalendar() {
  const today = new Date();
  const [viewDate, setViewDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const monthData = useMemo(() => {
    const start = startOfMonth(viewDate);
    const end = endOfMonth(viewDate);
    const days: Array<{ date: Date; dayNum: number; marketDay: MarketDay }> =
      [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const copy = new Date(d);
      days.push({
        date: copy,
        dayNum: copy.getDate(),
        marketDay: marketDayFor(copy),
      });
    }
    // weekday index of first day (0 Sun - 6 Sat)
    const startWeekday = start.getDay();
    return { days, startWeekday, viewDate };
  }, [viewDate]);

  const prevMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  return (
    <section id="igbo-calendar" className="py-6 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 text-yellow-500 rounded bg-transparent border border-traditional-500 text-traditional-700"
          >
            Prev
          </button>
          <h3 className="text-lg text-yellow-500 font-bold text-traditional-700">
            {viewDate.toLocaleString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <button
            onClick={nextMonth}
            className="px-3 py-1 text-yellow-500 rounded bg-transparent border border-traditional-500 text-traditional-700"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {/* weekday headers (Sun - Sat) */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((w) => (
            <div key={w} className="text-xs font-semibold text-yellow-500">
              {w}
            </div>
          ))}

          {/* empty cells for the first week */}
          {Array.from({ length: monthData.startWeekday }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* day cells
          {monthData.days.map(({ date, dayNum, marketDay }) => {
            const isToday = date.toDateString() === new Date().toDateString();
            return (
              <div key={date.toISOString()} className={`p-2 rounded-lg ${isToday ? 'ring-2 ring-traditional-500' : ''} bg-white`}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{dayNum}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-traditional-200 text-traditional-700">{marketDay}</div>
                </div>
              </div>
            );
          })} */}

          {/* day cells */}
          {monthData.days.map(({ date, dayNum, marketDay }) => {
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <div
                key={date.toISOString()}
                className={`
        group p-2 rounded-xl border 
        transition-all duration-150 
        ${
          isToday
            ? "border-yellow-500 ring-2 ring-yellow-500"
            : "border-gray-200"
        }
        hover:bg-yellow-100
      `}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  {/* Day Number (circular yellow border) */}
                  <div
                    className={`
            w-8 h-8 flex items-center justify-center rounded-full 
            border-2 border-yellow-500 text-yellow-700
            font-semibold text-sm
            ${isToday ? "bg-yellow-500 text-white" : ""}
          `}
                  >
                    {dayNum}
                  </div>

                  {/* Market Day Label (below, never overflowing) */}
                  <div
                    className="
            text-[10px] sm:text-xs 
            px-2 py-0.5 rounded-full 
            bg-yellow-200 text-yellow-800 
            uppercase tracking-wide 
            max-w-[60px] truncate
          "
                  >
                    {marketDay}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
