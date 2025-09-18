import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Header from '../../components/Header.jsx';
import EmployeeProfile from '../../components/EmployeeProfile.jsx';
import RequiredInfo from '../../components/RequiredInfo.jsx';
import LeaveApprovalFormContent from '../../components/LeaveApprovalFormContent.jsx';

export default function Workflow4Page() {
  return (
    <>
      <Navbar />
      <Header 
        breadcrumb="My Workspace > Leave Approval Request"
        title="Leave Request or Cancel - HR Approval (Workflow 4)"
        showBackArrow={true}
        showClockIcon={true}
      />
      <EmployeeProfile />
      <RequiredInfo />
      <LeaveApprovalFormContent />
    </>
  );
}
