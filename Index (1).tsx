import AppSidebar from "@/components/AppSidebar";
import QuickStats from "@/components/QuickStats";
import HealthScoreCard from "@/components/HealthScoreCard";
import CashFlowChart from "@/components/CashFlowChart";
import RecentTransactions from "@/components/RecentTransactions";
import SpendingBreakdown from "@/components/SpendingBreakdown";
import SavingsGoals from "@/components/SavingsGoals";
import AlertsPanel from "@/components/AlertsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Good evening
          </h1>
          <p className="text-muted-foreground mt-1">Here's your financial overview for March 2026</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <QuickStats />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <CashFlowChart />
          <HealthScoreCard />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <RecentTransactions />
          <SpendingBreakdown />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SavingsGoals />
          <AlertsPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;
