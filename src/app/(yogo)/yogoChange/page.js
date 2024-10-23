'use client';
import React from 'react';
import ChangeMenu from '../../../components/change/change_menu';
import { Button } from '@nextui-org/react';
import './styles/page.css';
import CompareModal from '../../../components/modal/compare_modal';
import ChangeModal from '../../../components/modal/change_modal';
import { CompareProvider } from '../../../components/modal/CompareContext';

export default function YogoChange() {
  return (
    <CompareProvider>
      <div className="homeStyle">
        <ChangeMenu />
        <CompareModal />
        <CompareModal />
        <ChangeModal />
      </div>
    </CompareProvider>
  );
}
