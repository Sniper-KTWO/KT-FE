'use client';
import React from 'react';
import ChangeMenu from '../../../components/change/change_menu';
import { Button } from '@nextui-org/react';
import './styles/page.css';
import { CompareProvider } from '../../../components/modal/CompareContext';
import { Card } from '@nextui-org/react';
import CustomTab from '../../../components/tab/customTab';

export default function YogoChange() {
  return (
    <div className="homeStyle">
      <CustomTab />
    </div>
  );
}
