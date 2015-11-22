# DATABASE MODELLING

Applicant

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
            questions : [{
                question_id : string
                score:number
                solution:string
            }],
            feedback:string
            valid:boolean
        },
        invitedBy: 
    }

Interviewer

    interviewer : {
        id:string
        password:string
        firstName:string
        lastName:string
        info:{
        }
        
    }

Test

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

Invitation

    invitation : {
        id:string,
        email: string
        cookie : string
        createdBy:string
        testId : string
    }

Question

    question: {
        id:string
        description:string
        solution:string
        testCases: [{
            input : 
            output: 
            weightage: 
        }]
        createdBy: string
        score : 50
        info:{}
    }


