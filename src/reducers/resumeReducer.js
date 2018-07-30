const resumeReducerDefault = {
    components: [
        {id: 1, name: 'Personal Info'},
        {id: 2, name: 'Image'},
        {id: 3, name: 'Educational Info'}
    ],
    resumeTemplate: {
        roughTemplateStructure: {
            roughScale: [{
                class: 'section temp1_comp1',
                name: 'right_panel'
            }, {
                class: 'section temp1_comp2',
                name: 'left_panel'
            }],
            componentIds:[{id: 1}, {id: 2}, {id: 3}]
        },
        actualTemplateStructure: {
            actualScale:[{
                name: 'right_panel'
            }, {
                name: 'left_panel'
            }]
        }
    },
    myCustomTemplate: []
}

const resumeReducer = (state=resumeReducerDefault, action) => {
    switch(action.type){
        case 'ADD_PANEL_IN_CT':
            return ({
                ...state,
                myCustomTemplate: [
                    ...state.myCustomTemplate,
                    {
                        refId: action.uid,
                        name: action.name
                    }
                ]
            });
        case 'ADD_COMPONENT_IN_PANEL':
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                        if(panel && panel.refId === action.panelRefId){
                            if(panel.components)
                                return ({
                                    ...panel,
                                    components: [
                                        ...panel.components,
                                        {
                                            id: action.compId
                                        }
                                    ]
                                })
                            else
                                return ({
                                    ...panel,
                                    components: [
                                        {
                                            id: action.compId
                                        }
                                    ]
                                })
                        }
                        else {
                            return panel;
                        }
                    })
            });
        default:
            return state;
    }
}

export default resumeReducer;