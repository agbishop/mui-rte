import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import FormatAlignCenter from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeft from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRight from '@mui/icons-material/FormatAlignRight';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import { Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { withStyles } from 'tss-react/mui';

export type TAlignment = 'left' | 'center' | 'right';

export type TMediaType = 'image' | 'video';

export type TUrlData = {
  url?: string;
  width?: number;
  height?: number;
  alignment?: TAlignment;
  type?: TMediaType;
};

interface IUrlPopoverStateProps {
  anchor?: HTMLElement;
  data?: TUrlData;
  isMedia?: boolean;
  onConfirm: (isMedia?: boolean, ...args: any) => void;
  classes?: Partial<Record<'linkPopover' | 'linkTextField', string>>;
}

const styles = ({ spacing }: Theme) => ({
  linkPopover: {
    padding: spacing(2, 2, 2, 2),
    maxWidth: 250,
  },
  linkTextField: {
    width: '100%',
  },
});

const defaultData: TUrlData = {
  url: undefined,
  width: undefined,
  height: undefined,
  alignment: undefined,
  type: undefined,
};

const UrlPopover:React.FC<IUrlPopoverStateProps> = (props) => {
  const {
    data, anchor, isMedia, onConfirm, classes,
  } = props;
  const [urlData, setUrlData] = useState<TUrlData>(data || defaultData);

  const onSizeChange = (value: any, prop: 'width' | 'height') => {
    if (value === '') {
      setUrlData({ ...urlData, [prop]: undefined });
      return;
    }
    const intValue = parseInt(value, 10);
    if (Number.isNaN(intValue)) {
      return;
    }
    setUrlData({ ...urlData, [prop]: intValue });
  };

  return (
    <Popover
      open={anchor !== undefined}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <div className={classes!.linkPopover}>
        <Grid container spacing={1}>
          <Grid container item xs spacing={1}>
            <Grid item xs={12}>
              <TextField
                className={classes!.linkTextField}
                onChange={(event) => setUrlData({ ...urlData, url: event.target.value })}
                label="URL"
                defaultValue={data && data.url}
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {isMedia ? (
              <>
                <Grid item xs={12}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={
                        !urlData.type || urlData.type === 'image'
                          ? 'primary'
                          : 'inherit'
                      }
                      size="small"
                      onClick={() => setUrlData({ ...urlData, type: 'image' })}
                    >
                      <InsertPhotoIcon />
                    </Button>
                    <Button
                      color={urlData.type === 'video' ? 'primary' : 'inherit'}
                      size="small"
                      onClick={() => setUrlData({ ...urlData, type: 'video' })}
                    >
                      <MovieIcon />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={(event) => onSizeChange(event.target.value, 'width')}
                    value={urlData.width || ''}
                    label="Width"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={(event) => onSizeChange(event.target.value, 'height')}
                    value={urlData.height || ''}
                    label="Height"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={urlData.alignment === 'left' ? 'primary' : 'inherit'}
                      size="small"
                      onClick={() => setUrlData({ ...urlData, alignment: 'left' })}
                    >
                      <FormatAlignLeft />
                    </Button>
                    <Button
                      color={
                        urlData.alignment === 'center' ? 'primary' : 'inherit'
                      }
                      size="small"
                      onClick={() => setUrlData({ ...urlData, alignment: 'center' })}
                    >
                      <FormatAlignCenter />
                    </Button>
                    <Button
                      color={urlData.alignment === 'right' ? 'primary' : 'inherit'}
                      size="small"
                      onClick={() => setUrlData({ ...urlData, alignment: 'right' })}
                    >
                      <FormatAlignRight />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </>
            ) : null}
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="row"
            justifyContent="flex-end"
          >
            {data && data.url ? (
              <Button onClick={() => onConfirm(isMedia, '')}>
                <DeleteIcon />
              </Button>
            ) : null}
            <Button
              onClick={() => onConfirm(
                isMedia,
                urlData.url,
                urlData.width,
                urlData.height,
                urlData.alignment,
                urlData.type,
              )}
            >
              <CheckIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Popover>
  );
};

export default withStyles(UrlPopover, styles);
