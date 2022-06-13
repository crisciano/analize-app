
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
}

export function LoadingCutom(){
      return (
          <div style={style}>              
              <CircularProgress />
          </div>
      ) 
}