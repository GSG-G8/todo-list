import React from 'react';
import {Input , Button} from 'antd';


const TodoList = () => {

    return(
        <div className="list-container">
            <Input className="list-input" placeholder="Add Your Task ..."/>
            <Button>Add</Button>
 
      </div>

    )

}

export default TodoList ;





