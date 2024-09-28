import { PermissionResponse } from 'expo-modules-core';
import { AudioMode, AudioSource, AudioStatus, PitchCorrectionQuality, RecorderState, RecordingInput, RecordingOptions } from './Audio.types';
import { AudioPlayer, AudioEvents, RecordingEvents, AudioRecorder } from './AudioModule.types';
export declare class AudioPlayerWeb extends globalThis.expo.SharedObject<AudioEvents> implements AudioPlayer {
    constructor(source: AudioSource, interval: number);
    id: number;
    isAudioSamplingSupported: boolean;
    isBuffering: boolean;
    shouldCorrectPitch: boolean;
    private src;
    private media;
    private interval;
    private isPlaying;
    private loaded;
    get playing(): boolean;
    get muted(): boolean;
    set muted(value: boolean);
    get loop(): boolean;
    set loop(value: boolean);
    get duration(): number;
    get currentTime(): number;
    get paused(): boolean;
    get isLoaded(): boolean;
    get playbackRate(): number;
    set playbackRate(value: number);
    get volume(): number;
    set volume(value: number);
    get currentStatus(): AudioStatus;
    play(): void;
    pause(): void;
    seekTo(seconds: number): Promise<void>;
    setAudioSamplingEnabled(enabled: boolean): void;
    setPlaybackRate(second: number, pitchCorrectionQuality?: PitchCorrectionQuality): void;
    remove(): void;
    _createMediaElement(): HTMLAudioElement;
}
export declare class AudioRecorderWeb extends globalThis.expo.SharedObject<RecordingEvents> implements AudioRecorder {
    constructor(options: Partial<RecordingOptions>);
    setup(): Promise<void>;
    id: number;
    currentTime: number;
    uri: string | null;
    private options;
    private mediaRecorder;
    private mediaRecorderUptimeOfLastStartResume;
    private mediaRecorderIsRecording;
    private timeoutIds;
    get isRecording(): boolean;
    record(): void;
    getAvailableInputs(): RecordingInput[];
    getCurrentInput(): RecordingInput;
    prepareToRecordAsync(): Promise<void>;
    getStatus(): RecorderState;
    pause(): void;
    recordForDuration(seconds: number): void;
    setInput(input: string): void;
    startRecordingAtTime(seconds: number): void;
    stop(): Promise<void>;
    clearTimeouts(): void;
    private createMediaRecorder;
    private getAudioRecorderDurationMillis;
}
export declare function setAudioModeAsync(mode: AudioMode): Promise<void>;
export declare function setIsAudioActiveAsync(active: boolean): Promise<void>;
export declare function getRecordingPermissionsAsync(): Promise<PermissionResponse>;
export declare function requestRecordingPermissionsAsync(): Promise<PermissionResponse>;
//# sourceMappingURL=AudioModule.web.d.ts.map