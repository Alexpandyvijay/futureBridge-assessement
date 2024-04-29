import React, { useRef, useState } from 'react';


function Row(props) {

    const [display, setDisplay] = useState(false);
    const myref = useRef(0);

    const onClickHandler = (e) => {
        e.stopPropagation();
        if(display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
        myref.current.classList.toggle('rotate-action');
    };

    return (
        <div className="accordion-row" onClick={onClickHandler}>
            <div className="accordion-header">{props.obj.title}</div>
            <span ref={myref} className="rotate-icon">^</span>
            { display ? <div className="accordion-body">{props.obj.body}</div> : '' }
        </div>
    );
}

export default function Accordion() {

    const data = [
        {
            title: 'Music',
            body: `If you aren't satisfied with the build tool and configuration choices, you can 'eject' at any time. 
            This command will remove the single build dependency from your project. 
            Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 
            All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
            You don't have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. 
            However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.`
        },
        {
            title: 'Art',
            body: `If you aren't satisfied with the build tool and configuration choices, you can 'eject' at any time. 
            This command will remove the single build dependency from your project. 
            Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 
            All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
            You don't have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. 
            However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.`
        },
        {
            title: 'Cinema',
            body: `If you aren't satisfied with the build tool and configuration choices, you can 'eject' at any time. 
            This command will remove the single build dependency from your project. 
            Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 
            All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
            You don't have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. 
            However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.`
        },
        {
            title: 'Direction',
            body: `If you aren't satisfied with the build tool and configuration choices, you can 'eject' at any time. 
            This command will remove the single build dependency from your project. 
            Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 
            All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
            You don't have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. 
            However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.`
        }

    ];

    return (
        <div className="accordion">
            {
                data.map((ele, i) => {
                    return <Row key={i} obj={ele}/>
                })
            }
        </div>
    );
}