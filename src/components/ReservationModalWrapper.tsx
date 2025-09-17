'use client';
import { useState } from 'react';
import ReservationModal from './ReservationModal';

export default function ReservationModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return <ReservationModal isOpen={isModalOpen} onClose={closeModal} />;
}
