export const updateInitialTemplate = () => {
    return {
        type: 'UPDATE_INITIAL'
    }
}

export const addComponentInPanel = (compId, panelName) => {
    return {
        type: 'ADD_COMPONENT_IN_PANEL',
        compId,
        panelName
    }
}

export const removeComponentFromPanel = (compId, panelName) => {
    return {
        type: 'REMOVE_COMPONENT_FROM_PANEL',
        compId,
        panelName
    }
}

export const updatePersonalInfo = (info, panelName, compId) => {
    return {
        type: 'UPDATE_PERSONAL_INFO',
        info,
        panelName,
        compId
    }
}

export const addEducationalInfo = (info, panelName, compId) => {
    return {
        type: 'ADD_EDUCATIONAL_INFO',
        info,
        panelName,
        compId
    }
}

export const updateImageFile = (info, panelName, compId) => {
    return {
        type: 'UPDATE_IMAGEFILE_INFO',
        info,
        panelName,
        compId
    }
}

export const updateContactInfo = (info, panelName, compId) => {
    return {
        type: 'UPDATE_CONTACT_INFO',
        info,
        panelName,
        compId
    }
}

export const updateSummary = (info, panelName, compId) => {
    return {
        type: 'UPDATE_SUMMARY',
        info,
        panelName,
        compId
    }
}

export const addSkill = (info, panelName, compId) => {
    return {
        type: 'ADD_SKILL',
        info,
        panelName,
        compId
    }
}

export const addProject = (info, panelName, compId) => {
    return {
        type: 'ADD_PROJECT',
        info,
        panelName,
        compId
    }
}

export const addCertificate = (info, panelName, compId) => {
    return {
        type: 'ADD_CERTIFICATION',
        info,
        panelName,
        compId
    }
}

export const addWorkExperience = (info, panelName, compId) => {
    return {
        type: 'ADD_WORK_EXPERIENCE',
        info,
        panelName,
        compId
    }
}