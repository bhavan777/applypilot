export type ProfileData = {
  fullName: string; firstName: string; lastName: string; email: string; phone: string; location: string; country: string;
  linkedin: string; github: string; portfolio: string; currentTitle: string;
  currentCompany: string; yearsExperience: string; skills: string; summary: string;
  workAuthorization: string; sponsorship: string; noticePeriod: string;
  salaryExpectation: string; preferredLocation: string; preferredWorkMode: string;
  resumeText: string; customFields: Record<string, string>;
};
export type Profile = { id: string; name: string; data: ProfileData; createdAt: string; updatedAt: string };
export type AppState = { profiles: Profile[]; activeProfileId: string | null; defaultProfileId: string | null };
export const EMPTY_PROFILE: ProfileData = {
  fullName:'', firstName:'', lastName:'', email:'', phone:'', location:'', country:'', linkedin:'', github:'', portfolio:'', currentTitle:'', currentCompany:'', yearsExperience:'', skills:'', summary:'', workAuthorization:'', sponsorship:'', noticePeriod:'', salaryExpectation:'', preferredLocation:'', preferredWorkMode:'', resumeText:'', customFields:{}
};
export const STORAGE_KEY = 'applypilot.state.v1';
export const createId = () => `profile_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
