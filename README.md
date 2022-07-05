> OpenAPI specs for Upy's API

<b><i>TLDR: </i></b> This repo aimed only for anyone who want to contribute to our projects or want to use our data on your own application, it's opened to public for now but we planned to restrict it's access in the future in order to maintain the traffic requests to our system.

<br><br>
<p align="center">
  <b><i>links:</i></b> 
  <a href="https://public.upy.moe/docs">Swagger Online Docs</a>&nbsp; • &nbsp;
  <a href="https://public.upy.moe/docs.json">JSON formatted</a>
</p>
<br>

#### # Generate client code
To generate client code of OpenAPI you can use <a href="https://editor.swagger.io/">Swagger Editor</a>, you just need to copy all the content of the YAML definition file from <a href="https://github.com/upydotmoe/spec/blob/main/swagger.json">swagger.json</a> and paste it in the swagger editor.
<br><br>
The next step is go to **Generate Client** and select **typescript-fetch**, wait until the download process done. And once the file downloaded, open the ZIP file and put `api.ts` to `api/openapi/` in the front-end source code.


#### # Further information
For further information or question you can ask me on <a href="https://twitter.com/nor1c_">`https://twitter.com/nor1c_`</a>.
