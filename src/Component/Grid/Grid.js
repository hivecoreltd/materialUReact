import React from 'react'

export default function Grid() {
    return (
        <div>
            <Grid container justify="center" spacing={2} wrap="wrap">
          {thiscountries.map((item1, index) => {
            return <Grid item key={index} >
              <Card country={item1} />
            </Grid>
          })}
        </Grid>
        </div>
    )
}
