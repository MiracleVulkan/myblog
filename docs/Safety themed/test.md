# 测试页面

<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

</script>

## master

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>