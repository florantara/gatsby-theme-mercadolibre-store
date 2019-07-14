// Material UI
import { createMuiTheme } from "@material-ui/core/styles"
import deepPurple from "@material-ui/core/colors/deepPurple"
import pink from "@material-ui/core/colors/pink"

const materialUIBase = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
    secondary: {
      main: pink[600],
    },
  },
})

export default materialUIBase
