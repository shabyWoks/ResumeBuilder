export const addPanelInMyCustomTemplate = (uid, name) => {
    return {
        type: 'ADD_PANEL_IN_CT',
        uid,
        name
    }
}

export const addComponentInPanel = (compId, panelRefId) => {
    return {
        type: 'ADD_COMPONENT_IN_PANEL',
        compId,
        panelRefId
    }
}