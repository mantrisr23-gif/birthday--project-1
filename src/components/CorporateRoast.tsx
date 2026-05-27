import React from 'react';
import { ROAST_CONFIG } from '../config/birthday';

export const CorporateRoast: React.FC = () => {
    return (
        <div className="p-6 bg-card rounded-lg border border-border shadow-md animate-in fade-in zoom-in duration-500">
            <h2 className="text-2xl font-display text-primary mb-4">
                {ROAST_CONFIG.employeeName} — {ROAST_CONFIG.jobTitle}
            </h2>
            
            <div className="space-y-2 mb-6">
                <p className="text-sm text-muted-foreground">Office Presence: {ROAST_CONFIG.officeHours}</p>
                <p className="text-lg font-bold text-accent">Status: {ROAST_CONFIG.roastStats.productivityLevel}</p>
            </div>

            <ul className="space-y-4">
                {ROAST_CONFIG.trollMessages.map((msg, index) => (
                    <li key={index} className="p-3 bg-muted/50 rounded text-sm italic border-l-2 border-primary">
                        "{msg}"
                    </li>
                ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-2 border border-border rounded">
                    <p className="text-[10px] uppercase tracking-widest">Tea Count</p>
                    <p className="text-xl font-black">{ROAST_CONFIG.roastStats.teaBreaksPerDay}</p>
                </div>
                <div className="p-2 border border-border rounded">
                    <p className="text-[10px] uppercase tracking-widest">Nap Frequency</p>
                    <p className="text-xl font-black">{ROAST_CONFIG.roastStats.napFrequency}</p>
                </div>// Inside CorporateRoast.tsx
<div className="animate-screen-shake animate-pulse-glow border-2 border-primary p-6">
   {/* Your Troll Content Here */}
</div>
            </div>
        </div>
    );
};
