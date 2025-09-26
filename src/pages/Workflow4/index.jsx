import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Header from '../../components/Header.jsx';
import EmployeeProfile from '../../components/EmployeeProfile.jsx';
import RequiredInfo from '../../components/RequiredInfo.jsx';
import LeaveApprovalForm4 from '../../components/LeaveApprovalForm4.jsx';

export default function Workflow4Page() {
  return (
    <>
      <Navbar />
      <Header 
        breadcrumb="My Workspace > Leave Approval Request"
        title="Leave Request or Cancel - Manager Approval"
        showBackArrow={true}
        showClockIcon={true}
      />
      <EmployeeProfile />
      <RequiredInfo />
      <LeaveApprovalForm4 />
    </>
  );
}
