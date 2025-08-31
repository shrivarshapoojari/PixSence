import { Shield, Lock, Award } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="mt-6 text-center">
      <div className="flex justify-center items-center space-x-6 text-xs text-gray-700 font-medium mb-4">
        <div className="flex items-center space-x-1">
          <Shield className="w-3 h-3 text-green-500" />
          <span>256-bit SSL</span>
        </div>
        <div className="flex items-center space-x-1">
          <Lock className="w-3 h-3 text-green-500" />
          <span>GDPR Compliant</span>
        </div>
        <div className="flex items-center space-x-1">
          <Award className="w-3 h-3 text-green-500" />
          <span>SOC 2 Type II</span>
        </div>
      </div>
      <p className="text-xs text-gray-600 font-medium">
        We protect your data with enterprise-grade security
      </p>
    </div>
  );
}
