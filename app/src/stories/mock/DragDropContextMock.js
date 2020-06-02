import React from 'react';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const DragDropContextMock = (props) => 
    <DndProvider backend={HTML5Backend}>
        {props.children}
    </DndProvider>

export default DragDropContextMock;
