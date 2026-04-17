import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MetricCounter = ({ label, value, unit, color }: { label: string; value: number; unit: string; color: string }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => {
        const delta = (Math.random() - 0.3) * 2;
        const next = Math.max(0, Math.min(100, prev + delta));
        return Math.round(next * 10) / 10;
      });
    }, 2000);
    setCurrent(value);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="p-3 rounded-lg bg-background/50">
      <div className="font-mono text-xs text-muted-foreground mb-1">{label}</div>
      <div className={`font-mono text-2xl font-semibold tabular-nums ${color}`}>
        {current.toFixed(1)}{unit}
      </div>
    </div>
  );
};

const StatusDot = ({ label, status }: { label: string; status: "healthy" | "warning" }) => (
  <div className="flex items-center gap-2 text-xs font-mono">
    <span className={`w-2 h-2 rounded-full pulse-dot ${status === "healthy" ? "bg-emerald-400" : "bg-amber-400"}`} />
    <span className="text-muted-foreground">{label}</span>
  </div>
);

const LogLine = ({ time, msg, level }: { time: string; msg: string; level: string }) => (
  <div className="flex gap-2 text-[11px] font-mono leading-5">
    <span className="text-muted-foreground/60">{time}</span>
    <span className={level === "INFO" ? "text-primary" : level === "WARN" ? "text-amber-400" : "text-emerald-400"}>
      [{level}]
    </span>
    <span className="text-muted-foreground">{msg}</span>
  </div>
);

export const DashboardMock = () => {
  return (
    <motion.div
      className="card-depth rounded-2xl p-1 bg-card/50"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span className="w-2.5 h-2.5 rounded-full opacity-60" style={{ backgroundColor: 'hsl(45, 93%, 58%)' }} />
          <span className="w-2.5 h-2.5 rounded-full opacity-60" style={{ backgroundColor: 'hsl(152, 69%, 53%)' }} />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/60 ml-2">
          horizon-x-dashboard
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <MetricCounter label="CPU" value={42.3} unit="%" color="text-primary" />
          <MetricCounter label="MEM" value={67.8} unit="%" color="text-accent" />
          <MetricCounter label="UPTIME" value={99.9} unit="%" color="text-emerald-400" />
        </div>

        {/* Status */}
        <div className="p-3 rounded-lg bg-background/50 space-y-2">
          <div className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest mb-2">
            Container Status
          </div>
          <StatusDot label="api-gateway" status="healthy" />
          <StatusDot label="auth-service" status="healthy" />
          <StatusDot label="worker-queue" status="healthy" />
          <StatusDot label="metrics-collector" status="warning" />
        </div>

        {/* Logs */}
        <div className="p-3 rounded-lg bg-background/80 space-y-0.5 overflow-hidden max-h-28">
          <div className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest mb-2">
            Live Logs
          </div>
          <LogLine time="12:04:32" level="INFO" msg="Container api-gw scaled to 3 replicas" />
          <LogLine time="12:04:31" level="OK" msg="Health check passed — all services" />
          <LogLine time="12:04:28" level="INFO" msg="Deploy v2.4.1 completed successfully" />
          <LogLine time="12:04:25" level="WARN" msg="metrics-collector latency spike 120ms" />
          <LogLine time="12:04:22" level="INFO" msg="Auto-scaling triggered for worker-queue" />
        </div>
      </div>
    </motion.div>
  );
};
