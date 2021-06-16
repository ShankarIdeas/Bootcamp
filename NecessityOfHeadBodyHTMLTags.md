Is it necessary to write <code>&lt;html></code>, <code>&lt;head></code> and <code>&lt;body></code> tags?

For example, I can make such a page:

<code>
    &lt;!DOCTYPE html>  
  
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Page Title</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <script src="js/head_script.js"></script><!-- this script will be in head //-->
    
    <div>Some html</div> <!-- here body starts //-->
    
    <script src="js/body_script.js"></script>
</code>

  
  And Firebug correctly separates <code>head</code> and <code>body</code>:
  
  
  ![image](https://user-images.githubusercontent.com/85400367/122304008-1ef2d300-cf22-11eb-9f40-c1ffb4a9a613.png)
  
  W3C Validation says it's valid.

But I rarely see this practice on the web.

Are there any reason to write these tags?

  The HTML5 validator at <a href="html5.validator.nu">html5.validator.nu</a> requires the <code>title</code> tag. This is the smallest document it considers valid: 
  
  <code> &lt;!DOCTYPE html>
    <title>A</title></code>
  

  Omitting the <code>html</code>, <code>head</code>, and <code>body</code> tags is certainly allowed by the HTML specs. The underlying reason is that browsers have always sought to be consistent with existing web pages, and the very early versions of HTML didn't define those elements. When HTML 2.0 first did, it was done in a way that the tags would be inferred when missing.

I often find it convenient to omit the tags when prototyping and especially when writing test cases as it helps keep the mark-up focused on the test in question. The inference process should create the elements in exactly the manner that you see in Firebug, and browsers are pretty consistent in doing that.

But...

IE has at least one known bug in this area. Even IE9 exhibits this. Suppose the markup is this:
  
![image](https://user-images.githubusercontent.com/85400367/122308157-77799e80-cf29-11eb-98a5-d235579966f6.png)

 See it for yourself.
  This bug seems limited to the <code>form</code> start tag preceding any text content and any <code>body</code> start tag.


