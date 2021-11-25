import React,{useState, useEffect} from "react";
import '../styles/MainPage.css'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const MainPage = () => {
    const [data, setData] = useState(null)
    let navigate = useNavigate();

    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.message))
    }, [])

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#fff',
          },
        },
      })

    function hadleClick() {
        navigate('/test')
    }

    return(
    <div className="start">
        <p>
          {
            !data ? 'Server upal vse propalo(((' : data
          }
        </p>
        <ThemeProvider theme={theme}>
            <Button 
                variant="contained"
                onClick={hadleClick}
                color='neutral'
                sx={{ width: '20%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
            >начать тестирование</Button>
        </ThemeProvider>
    </div>
    )
}

export default MainPage;