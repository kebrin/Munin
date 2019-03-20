import { Audio } from 'expo';

export const Sounds = {
    doiing: require('../assets/sounds/hello.wav'),
    click: require('../assets/sounds/klikk.wav'),
    gong: require('../assets/sounds/gong.wav'),
    shortFart: require('../assets/sounds/fart1.wav'),
    longFart: require('../assets/sounds/fart2.wav'),
    fanfare: require('../assets/sounds/tada.wav'),
    clock: require('../assets/sounds/8sec.wav'),
}

export const Music = {
    elevator: require('../assets/sounds/VisionOnGalleryTheme.mp3'),
    adventure: require('../assets/sounds/AdventureLine.mp3'),
}

//
// Usage ex:
//      PlaySound(Sounds.doiing);
//
export const PlaySound = async (snd) =>
{
    const SoundObject = new Audio.Sound();
    try
    {
        await SoundObject.loadAsync(snd);
        await SoundObject.playAsync();
    }
    catch (error)
    {}
}

const bgMusic = new Audio.Sound();

export const PlayMusic = async (snd) =>
{
    try
    {
        StopMusic();
        await bgMusic.loadAsync(snd);
        bgMusic.setIsLoopingAsync(true);
        await bgMusic.playAsync();
    }
    catch (error)
    {}
}

export const StopMusic = async () =>
{
    try
    {
        await bgMusic.stopAsync();
    }
    catch (error)
    {}
}
