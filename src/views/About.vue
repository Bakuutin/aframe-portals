<template>
  <a-entity>
    <a-text position="0 3 -7" color="white" side="double" scale="5 5 5" value="Hello there"></a-text>
    <a-text position="-2 2 -7" color="white" side="double" scale="4 4 4" value="It's a portals demo,"></a-text>
    <a-text position="-2 1 -7" color="white" side="double" scale="4 4 4" value="walk through objects"></a-text>

    <a-cylinder position="-3 1 -7" radius="0.5" height="1.5" color="#FFC65D" portal="path: /"></a-cylinder>

  </a-entity>
</template>
