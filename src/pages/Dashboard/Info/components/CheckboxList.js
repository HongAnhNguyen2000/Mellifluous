import { Typography, Box, Stack, Grid, FormControlLabel, Checkbox } from '@mui/material';
import React, {useState} from 'react'

const CheckboxList = () => {
    const ListApi = [{clubName: 'Club1', clubId: 1}, {clubName: 'Club2', clubId: 2}, {clubName: 'Club3', clubId: 3}];
    const existListApi = [{clubName: 'Club1', clubId: 1}, {clubName: 'Club2', clubId: 2}]
    const [listSelected, setListSelected] = useState(existListApi);

    const onChangeSelectedItem = (checked, item) => {
        if (checked) {
          setListSelected((prev) => [...prev, { clubId: item.clubId, clubName: item.clubName}]);
        } else {
          setListSelected((prev) => prev.filter((v) => v.clubId !== item.clubId));
        }

      };

    console.log(listSelected)

    const isItemSelected = (item) => Boolean(listSelected.find((v) => v.clubId === item.clubId));

  return (
    <Box>
        <Typography> Club Permission </Typography>
        <Box mt={1}>
        <Stack spacing={1}>
          <Grid container>
            {ListApi.map((item) => (
              <Grid item key={item.clubId} sm={6}>
                <FormControlLabel
                  label={item.clubName}
                  control={
                    <Checkbox
                      checked={isItemSelected(item)}
                      onChange={(e) => onChangeSelectedItem(e.target.checked, item)}
                    />
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  )
}

export default CheckboxList