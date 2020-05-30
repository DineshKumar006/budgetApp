import moment from 'moment'

export const  visibleData=(expenses,filters)=>{

    if(expenses.length>0){

    const {text,startDate,endDate,sortBy,amountSearch}=filters
    // console.log(filters)
    //  console.log(endDate)

   return expenses.filter(ele=>{
       const createdAtmoment=moment(ele.createdAt)
        const startDateMatch=startDate? startDate.isSameOrBefore(createdAtmoment,'day')  :true
        const  endDateMatch= endDate  ?    endDate.isSameOrAfter(createdAtmoment,'day') :true
        const   textMatch=ele.description.includes(text)
        const amountMatch=ele.amount===amountSearch || isNaN(amountSearch)
        console.log(startDateMatch,endDateMatch,textMatch,amountMatch)
        return textMatch && startDateMatch && endDateMatch && amountMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ?1 :-1
        }
        else if(sortBy==='amount'){
            // console.log(a.amount,b.amount)
            return a.amount < b.amount ? 1: -1
        }
    })
}
}
