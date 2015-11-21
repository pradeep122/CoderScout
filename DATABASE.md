## DATABASE MODELLING

    applicant : {
        id : string
        firstName: string
        lastName: string
        info : {
        },
        test : {
            testId: string
            language: string
            startTime:string
    submitTime: string
            endTime:string
            scores : [{
                question_id : string
                score:number
            }],
            feedback:string
    },
    invitedBy: 
    }


    interviewer : {
        id:string
        password:string
        firstName:string
        lastName:string
        info:{
        }
        
    }

    test : {
        id: string
        invitations: [{
            invitationId:string
    }],
    questions : [{
        questionId:string
    }],
    startTime:string
    endTime:string
    duration:number
        createdBy: string
    }

    invitation : {
        id:string,
        email: string
        accessKey:string    
        createdBy:string
    }

    question: {
        id:string
        description:string
        testCases: [{
            input : 
            output: 
            weightage: 
    }]
        createdBy: string
        score : 50
    }


