import { Box, Typography } from '@material-ui/core'
import { sanitize } from 'dompurify'
import useStyle from './response-hub-style'
import clsx from 'clsx'
import { CustomTable } from 'components'

interface IProps {
  responseObject?: any | null
  isResponse?: boolean
  title?: string | null
  titleStyle?: string
  inputStyle?: string
  rootStyle?: string
  columns?: Record<string, any>
  rowsData?: any
}
const ResponseHub = ({
  responseObject,
  isResponse,
  title,
  titleStyle,
  inputStyle,
  rootStyle,
  columns,
  rowsData,
}: IProps) => {
  const classses = useStyle({ rowsData })
  return (
    <Box className={clsx(classses.root, rootStyle)}>
      <Typography className={clsx(classses.typoStyle, titleStyle)}>
        {title ? title : `Response from HUB:`}
      </Typography>
      {rowsData ? (
        <div className={clsx(classses.inputType, inputStyle)}>
          <CustomTable columns={columns!} rowsData={rowsData} />
        </div>
      ) : (
        <div
          className={clsx(classses.inputType, inputStyle)}
          dangerouslySetInnerHTML={{
            __html: sanitize(
              isResponse
                ? JSON.stringify(responseObject, null, 10).replace(
                    /\n( *)/g,
                    function (match, p1) {
                      return '<br>' + '&nbsp;'.repeat(p1.length)
                    },
                  )
                : '',
            ),
          }}
        ></div>
      )}
    </Box>
  )
}

export default ResponseHub
