---
title: "Tutorial: Tips regarding Web accessibility"
date: 2023-04-29
tags: 
 - web development
 - accessibility
 - tutorial
 - site resources
description: "A few things I learned while making websites in an accessible way."
---

## Tutorial: Tips regarding Web accessibility

Whenever I browse personal websites, it's often I notice a lack of thought from their Webmasters when it comes to browsing the Web in a way different than their own.

Back when I hosted my sites on Neocities, I ended up learning a lot about Web accessibility and why it matters. I very firmly believe that the indie Web shouldn't be gatekept from people who genuinely want to learn more about it, especially if it's over something they can't control.

So, here's a list of things you might want to upgrade or add to your site, with instructions on how to do them and why it's important.

### Table of contents

1. [Designing with screen readers in mind](#screen-readers)
2. [Writing alt text](#alt-text)
3. [Autoplay sounds and music](#autoplay)
4. [Links must look like links](#links)
5. [Fonts, their sized and colors](#fonts)
6. [Emojis](#emojis)
7. [Flashing GIFs](#gifs)
8. [Transcripts for audio](#transcripts)
9. [Compressing images](#image-size)

## Designing with screen readers in mind {#screen-readers}

Screen readers are a form of assistive technology that reads text and image content set in a website out loud. They are essential for blind users and important for people with reading issues, such as those with dyslexia. They are useful for those who are visually impaired or have difficulty reading for whatever reason.

Common desktop screen readers include:

- [NVDA](https://www.nvaccess.org/) for Windows
- [Orca](https://help.gnome.org/users/orca/stable/) for Linux
- [VoiceOver](https://www.apple.com/accessibility/vision/) for macOS

The first two are completely free to use, while VoiceOver comes with Apple products. These tools are essential for testing out your site if you want to keep it accessible.

It's recommended you actually test your site to see if it works well with screen readers. You'll learn a lot by using them.

While writing, do not use all caps or all lowercase. Both of these can mess up with screen readers, especially the former. Some screen readers will not recognize a word in all caps as a single word, and will instead read each letter individually; using all lowercase gives the opposite problem- some acronyms will be read as a single word.

If you want to write in all caps or all lowercase, using the CSS property text-transform is recommended instead.

For example, let's say we want all major headings to be in all lowercase. The CSS code we'd use would go as follows:

```
h1 {
    text-transform: lowercase;
}
```

Alternitavely, if we wanted to write only certain parts of our text to be in all caps, we'd make a CSS class to use with the <span> or <p> tag:

```
.yell {
    text-transform: uppercase;
}
```

## Writing alt text {#alt-text}

Alt text is essential for accessible design- it allows screen readers to describe an image, and it replaces it if the image doesn't load or doesn't exist in the server so context isn't lost.

It's very easy to implement. You merely have to add the alt= attribute to the img tag. Here's an example:

```
<img src="cat.png" alt="Picture of a cat">
```

Of course, for more complex images you will have to write longer alt text. However, avoid details that are unnecessary to the overall message. Don't go on tangents about the color of a character's clothes when the main focus is what they're doing, for example.

![Detail of Hieronymus Bosch's The Temptation of Saint Anthony. It features and anthropomorphic bird-like creature holding a letter in its beak.](/images/bosch.png)

For this image, we decided to use a detail of a painting by Bosch. Here is the alt text we wrote, for those who don't want to access the page source:

"Detail of Hieronymus Bosch's The Temptation of Saint Anthony. It features and anthropomorphic bird-like creature holding a letter in its beak."

Take special care regarding decorative images and image-heavy galleries. If an image is meant as a decoration, one or two words might be enough, while image-heavy galleries should have brief descriptions. This is because screen readers will take ages to read out a page while focusing on the wrong things.

Additionally, the title attribute must not be the same as the alt text. This is because screen readers read both, and would make for an annoying browsing experience.

## Autoplay sounds and music {#autoplay}

In regards to accessibility, autoplay is often frowned upon. Why is that?

1. People using screen readers will have trouble hearing them.
2. People might be startled when they hear loud, sudden music.

That being said, if you want to include autoplay, there are a few things you can do to make it more user-friendly.

The first is to include JavaScript that sets the volume to be lower off the start.

```
<body>
    <audio controls autoplay id="volumeset">
        <source src="html-audio.mp3" type="audio/mpeg">
    </audio>
                    
    <script>
        var audio = document.getElementById("volumeset");
        audio.volume = 0.4;
    </script>
</body>
```

The second is to always include audio controls, so the user can decide to lower or pause the sounds themselves.

## Links must look like links {#links}

Links must look visually different from regular text, so people know what is and isn't a link.

However, for truly accessible design, make sure they are distinct- we underline our links, for example. This is so people who are colorblind can also recognize what is and isn't a link. Making links different colors isn't always enough.

You could also get creative with it. A pal of mine, [numbers](https://noombers.neocities.org/), came up with a pretty neat and unique solution: using the CSS selector :after, they included an arrow after each link.

```
a:after {
    content: "↗";
}
```

On a side note, numbers went even further and distinguished outbound and inbound links, but that isn't inherently necessary for this. What's necessary is that the thing that comes afterwards is:

1. Not an image, because if the image doesn't load properly people won't know where the links are.
2. Not a character that is often used for other purposes. Brackets, quotation marks, and so on should be avoided in this instance.

## Fonts, their sized and colors {#fonts}

Fonts are obviously very important if you want to have text on a website. It's important to consider certain things when implementing font styling though.

Fonts are obviously very important if you want to have text on a website. It's important to consider certain things when implementing font styling though.

Secondly, make sure the size isn't too small- 1rem (which is the standard font size) is quite good, we recommend not going under .8rem as the text might be too small for users to read. Remember, just because you can read small text, that doesn't mean everyone can- even users that aren't visually impaired might have trouble reading tiny text.

Finally, color is equally important. The colors must contrast against each other in a way that doesn't cause eye-strain. So, we recommend avoiding bright text on bright backgrounds, pastel text on pastel backgrounds, et cetera.

## Emojis {#emojis}

Emojis are a part of modern day-to-day Internet life, even being essential for certain memes. However, with more emojis being added regularly, it might take some time for all devices to catch up. As such, it might be a good idea to include a custom emoji set.

You could use small pixel art (sozai) if you like cute assets, or use a pre-built emoji library such as [Twemoji](https://twemoji.twitter.com/) or [Mutant Standard](https://mutant.tech/).

It might also be beneficial to include alt text. Here's an example:

```
<img src="/demon.svg" alt="Demon emoji">
```

You might want to define the width of the emojis if you're using SVG files, as they're originally quite large.

```
.emoji {
    width: 1.2rem;
}
```

Applying a class like this to a larger image file will make sure all the images in said class will have the same size.

## Flashing GIFs {#gifs}

Photosensitive epilepsy is a condition where seizures are triggered by flashing lights or contrasting light and dark patterns. These kinds of patterns can also affect epileptic folk whose epilepsy isn't photosensitive, making them feel unwell, disorientated, or uncomfortable.

Anyone with epilepsy can tell you that seizures are not pleasant, regardless of type. Tonic-clonic seizures (formerly known as grand-mal seizures) can be especially harmful, as one loses consciousness and control of their body. In rare cases, they can be potentially fatal.

There's ways to help those with epilepsy have an easier time navigating the Web when developing a website:

1. Make sure not to include flashing GIFs where they are not needed, or at least avoid putting them in large numbers in the same page.
2. Slow down GIFs using your preferred GIF editor. A good one is the browser-based [EZGIF](https://ezgif.com/).
3. Always include warnings when linking to a page with seizure-inducing GIFs.
4. Make sure your GIF is not between 3-30 hertz (flashes per second), as those are the most common rates to trigger seizures.

There's also a way to blur an image before it's hovered with CSS, which can come in handy for many flashing GIFs.

```
.flashing {
    -webkit-filter: blur(5px); /* For Safari 6.0 - 9.0 */
    filter: blur(5px);
}
            
.flashing:hover {
    -webkit-filter: none;
    filter: none;
}
```

The blur effect should be around 5 pixels like the code above, but you might have to tweak it a bit depending on how flashy your GIF is.

## Transcripts for audio {#transcripts}

Similarly to people who can't see well, there are people who can't hear well. As such, it's pretty important to add transcripts of relevant audio.

Beside helping HOH people, it will also allow users with no sound on to understand the context.

Here's Youtube's first ever video (Me at the zoo), with a transcript below it:

{{< youtube jNQXAC9IVRw >}}

**Jawed Karim**: [to the camera] All right, so here we are in front of the, uh, elephants, and the cool thing about these guys is that, is that they have really, really, really long, um, trunks, and that's, that's cool, and that's pretty much all there is to say.

This transcript was copy-pasted from [Wikiquote](https://en.wikiquote.org/wiki/Me_at_the_zoo), as I could barely understand what the guy was saying myself. It's important to note that videos with proper captions in them don't require transcripts.

Naturally, it takes a lot of work if the video is long. However, anything that is relevant to the overall point of the page should have transcripts- even if you leave some things out, such as the stutters or irrelevant jokes.

## Compressing images {#image-size}

If your page is image-heavy, it might be beneficial to compress them. In other words, lower their file size. This will help your website load faster, and it's especially helpful for those with a poor Internet connection.

There are programs that allow you to shave off the size of image files, such as [PNGGauntlet](https://pnggauntlet.com/) (for Windows) or [Curtail](https://github.com/Huluti/Curtail) (for Linux). There are also browser-based solutions, such as [Squoosh](https://squoosh.app/) and [EZGIF](https://ezgif.com/). The latter allows users for multiple file types, including GIFs, so it's especially recommended.