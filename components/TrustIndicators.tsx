import { Shield, Lock, Award } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="mt-6 text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-800 font-semibold mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-green-500" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-green-500" />
            <span>SOC 2 Type II</span>
          </div>
        </div>
        <p className="text-sm text-gray-700 font-semibold">
          We protect your data with enterprise-grade security
        </p>
      </div>
    </div>
  );
}
