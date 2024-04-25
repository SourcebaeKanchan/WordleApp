import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


export default function SimplePopup() {


    const instructionsWrapper = [
        {dynamicArray:['W', 'E', 'A', 'R', 'Y'],desc:'W is in the word and in the correct spot.'},
        {dynamicArray:['P', 'I', 'L', 'L', 'S'],desc:'I is in the word but in the wrong spot.'},
        {dynamicArray:['V', 'A', 'G', 'U', 'E'],desc:  'U is not in the word in any spot.'},
  ]

    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    return (
        <div>
            <Button aria-describedby={id} type="button" onClick={handleClick}>
            How to play ?
            </Button>
            <BasePopup id={id} open={open} anchor={anchor} className='basePopup'>
                <PopupBody classname="content">

                    <h1> How To Play ? </h1>
                    <h2>Guess the Wordle in 6 tries.</h2>

                    <ul>
                        <li> Each guess must be a valid 5-letter word.</li>
                        <li> The color of the tiles will change to show how close your guess was to the word</li>
                    </ul>

                    <strong> <h7> Examples </h7></strong>
                    <div className='instruction_wrapper   '>
                        {
                            instructionsWrapper.map((items, index) => {



                                return <>
                                    <div className="boxes" key={index}>
                                        {

                                            items?.dynamicArray?.map((item, idx) => {
                                                                                          // {console.log(index===idx ,index,idx,"[[")}
                                                return <div className={`Box instruction_Box 
                                                ${index===idx && index===0 && 'green_class'}
                                                ${index===idx && index===1 && 'yellow_class'}
                                                ${index===idx && index===2 && 'gray_class'}
                                                `}  >
                                                    {
                                                        (idx !== 0) ? item : 'W'
                                                    }
                                                </div>

                                            })

                                        }

                                    </div>
                                    <div>
                                        {
                                            items.desc 
                                        }

                                    </div>
                                </>
                            })

                         
                        }
                           <div className='hello'>
                           <Button aria-describedby={id} type="button" onClick={handleClick}>
                            Ok
                            </Button>
                           </div>
                            
                    </div>
                </PopupBody>
            </BasePopup>
        </div>
    );
}

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const PopupBody = styled('div')(
    ({ theme }) => `
  width: max-content;
  padding: 30px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${theme.palette.mode === 'dark'
            ? `4px 4px 6px 8px rgb(0 0 0 / 0.7)`
            : `4px 4px 6px 8px rgb(0 0 0 / 0.1)`
        };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
    ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 127, 255, 0.5)'
        }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);
