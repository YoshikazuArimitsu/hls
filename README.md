m3u8/ts 作成

```bash
$ ffmpeg -i video.mp4 -codec copy -vbsf h264_mp4toannexb -map 0 -f segment -segment_format mpegts -segment_time 5 -segment_list video/video.m3u8 video/video_%5d.ts
```
