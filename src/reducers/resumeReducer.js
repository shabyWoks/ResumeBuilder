const resumeReducerDefault = {
    components: [
        {id: 1, name: 'Personal Info', firstname: 'Shubham', lastname: 'Bhiwaniwala', title: 'Software Developer'},
        {id: 2, name: 'Educational Info', qualifications: [{ instname: 'Jadavpur University', degree: 'B.E.', yop: 2018, sod: 'Dept. of Power Engineering' }]},
        {id: 3, name: 'Image Info', imagefile: "" },
        {id: 4, name: 'Contact Info', mob: '0000000000', cc : '000', email: 'abc@xy.z', web: 'www.mno.xy' },
        {id: 5, name: 'Summary', summary: 'Fresh Full Stack Developer having Internship Experience in Industry. Experienced in competitive programming with good problem solving and handling skills. Exposure of Data Science and Machine Learning is an added bonus.'},
        {id: 6, name: 'Skills', skillList: [{name: 'Angular', score: 6, outOf: 10}]},
        {id: 7, name: 'Project Info', projectList : [{ title: 'My Project', description: 'this is my project description', key: ['key 1', 'key 2', 'key 3', 'key 1', 'key 2', 'key 3', 'key 1', 'key 2', 'key 3', 'key 1', 'key 2', 'key 3'] }]}
    ],
    resumeTemplate: [{
        roughClass: 'section temp1_comp1',
        actualClass: 'ac1_panel1',
        name: 'right_panel',
        components: [{id: 3}, {id: 4}]
    }, {
        roughClass: 'section temp1_comp2',
        actualClass: 'ac1_panel2',
        name: 'left_panel',
        components: [{ id: 1 }, { id: 5 }, { id: 2 }, { id: 6 }, {id: 7}]
    }],
    myCustomTemplate: []
}

const resumeReducer = (state=resumeReducerDefault, action) => {
    switch(action.type){
        case 'UPDATE_INITIAL':
            const tState = state;
            const myCustomTempArray = tState.resumeTemplate.map((panel) => {
                const pComponents = panel.components.map((component) => {
                    return ({ ...state.components.filter((aComponent) => aComponent.id === component.id)[0]});
                });
                return ({ ...panel, components: pComponents });
            });
            return ({ ...state, myCustomTemplate: myCustomTempArray });
        case 'ADD_COMPONENT_IN_PANEL':
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                        if(panel && panel.name === action.panelName){
                            if(panel.components)
                                return ({ ...panel, components: [ ...panel.components, ...state.components.filter((component) => component.id === action.compId)] })
                            else
                                return ({ ...panel, components: [...state.components.filter((component) => component.id === action.compId)] })
                        }
                        return panel;
                    })
            });
        case 'REMOVE_COMPONENT_FROM_PANEL': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel && panel.name === action.panelName){
                        return {
                            ...panel,
                            components: panel.components.filter((component) => {
                                            console.log(component.id !== action.compId);
                                            return component.id !== action.compId
                                        })
                        };
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'UPDATE_PERSONAL_INFO':
            const val =state.myCustomTemplate.map((panel) => {
                if(panel.name === action.panelName){
                    return { ...panel, components: panel.components.map((component) => {

                        if(component.id === action.compId){
                            return { ...component, ...action.info };
                        }
                        else{
                            return component;
                        }
                    })}
                }
                else{
                    return panel;
                }
            })
            return ({
                ...state,
                myCustomTemplate: val
            });
        case 'ADD_EDUCATIONAL_INFO':
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            if(component.id === action.compId){
                                return { ...component, qualifications: [ ...component.qualifications, { ...action.info }]};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'UPDATE_IMAGEFILE_INFO': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            console.log(action);
                            if(component.id === action.compId){
                                return { ...component, ...action.info};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'UPDATE_CONTACT_INFO': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            if(component.id === action.compId){
                                return { ...component, ...action.info};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'UPDATE_SUMMARY': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            if(component.id === action.compId){
                                return { ...component, ...action.info};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'ADD_SKILL': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            if(component.id === action.compId){
                                return { ...component, skillList: [ ...component.skillList, action.info]};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        case 'ADD_PROJECT': 
            return ({
                ...state,
                myCustomTemplate: state.myCustomTemplate.map((panel) => {
                    if(panel.name === action.panelName){
                        return { ...panel, components: panel.components.map((component) => {
                            if(component.id === action.compId){
                                return { ...component, projectList: [ ...component.projectList, action.info]};
                            }
                            else{
                                return component;
                            }
                        })}
                    }
                    else{
                        return panel;
                    }
                })
            });
        default:
            return state;
    }
}

export default resumeReducer;