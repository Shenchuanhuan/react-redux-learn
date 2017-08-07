/*
action 纯对象，必须有type属性

**/
export const plusAction = () => {
  return {
       type: 'CLICK_TO_ADD' 
  }
}

export const minusAction = {
  type: 'CLICK_TO_MINUS'
}