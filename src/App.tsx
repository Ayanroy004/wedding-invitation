/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { DEFAULT_INVITATION_DATA, InvitationData } from './types/invitation';
import { EnvelopeStage } from './components/EnvelopeStage';
import { CustomizerModal } from './components/CustomizerModal';

export default function App() {
  const [data, setData] = useState<InvitationData>(() => {
    try {
      const saved = localStorage.getItem('ghar_bandhar_chithi_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return DEFAULT_INVITATION_DATA;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ghar_bandhar_chithi_data', JSON.stringify(data));
    } catch {
      // Storage quota or private mode
    }
  }, [data]);

  return (
    <div className="min-h-screen w-full bg-[#f3e8d2] font-bengali-sans overflow-x-hidden">
      {/* Master Envelope View */}
      <EnvelopeStage
        data={data}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Customizer Drawer / Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onSave={(updated) => setData(updated)}
      />
    </div>
  );
}
