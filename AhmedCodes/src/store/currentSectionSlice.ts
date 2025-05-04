import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentSectionState {
    currentSection: 'home' | 'welcome' | 'skills' | 'projects' | 'about' | 'contact' | 'footer';
}

const initialState: CurrentSectionState = {
    currentSection: 'home'
};

export const currentSectionSlice = createSlice({
    name: 'currentSection',
    initialState,
    reducers: {
        setCurrentSection: (state, action: PayloadAction<CurrentSectionState['currentSection']>) => {
            state.currentSection = action.payload;
        },
        updateCurrentSectionFromScroll: (state) => {
            const sections = ['home', 'welcome', 'skills', 'projects', 'about', 'contact', 'footer'] as const;
            let current: CurrentSectionState['currentSection'] = 'home';
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section as CurrentSectionState['currentSection'];
                    }
                }
            });
            
            state.currentSection = current;
        }
    }
});

export const { setCurrentSection, updateCurrentSectionFromScroll } = currentSectionSlice.actions;

export default currentSectionSlice.reducer;
